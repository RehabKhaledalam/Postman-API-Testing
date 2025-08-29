const jsonServer = require('json-server');
const auth = require('json-server-auth');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const secret = 'yourSecretKey';

server.db = router.db; // مهم علشان auth يشتغل

// ✅ Middleware للتحقق من صلاحية الأدمن
function checkAdmin(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, secret);
    if (decoded.role !== 'admin') {
      return res.status(403).json({ message: 'Admins only' });
    }
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
}

// ✅ Route لتسجيل الدخول وإنشاء توكن بصلاحية وانتهاء
server.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = server.db.get('users').find({ email }).value();

  if (!user) return res.status(404).json({ message: 'User not found' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: 'Invalid password' });

  const token = jwt.sign(
    { email: user.email, role: user.role },
    secret,
    { expiresIn: '1h' } // التوكن ينتهي بعد ساعة
  );

  res.status(200).json({ accessToken: token });
});

// ✅ مثال على استخدام checkAdmin لحماية إضافة كورس
server.post('/courses', checkAdmin, (req, res, next) => {
  next(); // يسمح لـ json-server بإكمال العملية
});

server.use(middlewares);
server.use(auth);
server.use(router);

server.use('/', jsonServer.static('public'));


server.listen(3001, () => {
  console.log('✅ JSON Server with Auth is running on http://localhost:3001');
});