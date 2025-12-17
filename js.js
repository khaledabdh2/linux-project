const commands = [
  {
    cmd: "ls",
    title: "عرض الملفات",
    short: "إظهار محتويات المجلد",
    desc: "يعرض جميع الملفات والمجلدات الموجودة داخل المجلد الحالي.",
    example: "ls -la",
    img: "images/ls.PNG"
  },
  {
    cmd: "pwd",
    title: "عرض المسار الحالي",
    short: "معرفة مكانك الحالي",
    desc: "يعرض المسار الكامل للمجلد الحالي الذي تعمل بداخله.",
    example: "pwd",
    img: "images/pwd.PNG"
  },
  {
    cmd: "cd",
    title: "تغيير المجلد",
    short: "التنقل بين المجلدات",
    desc: "يستخدم للتنقل من مجلد إلى آخر داخل النظام.",
    example: "cd /home/user",
    img: "images/cd.PNG"
  },
  {
    cmd: "mkdir",
    title: "إنشاء مجلد",
    short: "إنشاء مجلد جديد",
    desc: "يقوم بإنشاء مجلد جديد في المسار الحالي.",
    example: "mkdir MyProject",
    img: "images/mkdir.PNG"
  },
  {
    cmd: "touch",
    title: "إنشاء ملف",
    short: "إنشاء ملف فارغ",
    desc: "ينشئ ملفًا جديدًا فارغًا أو يحدث تاريخ التعديل.",
    example: "touch notes.txt",
    img: "images/touch.PNG"
  },
  {
    cmd: "cp",
    title: "نسخ الملفات",
    short: "نسخ ملف أو مجلد",
    desc: "ينسخ الملفات أو المجلدات من مكان إلى آخر.",
    example: "cp file.txt backup.txt",
    img: "images/cp.PNG"
  },
  {
    cmd: "mv",
    title: "نقل أو إعادة تسمية",
    short: "نقل أو تغيير اسم ملف",
    desc: "يستخدم لنقل الملفات أو إعادة تسميتها.",
    example: "mv old.txt new.txt",
    img: "images/mv.PNG"
  },
  {
    cmd: "rm",
    title: "حذف الملفات",
    short: "إزالة الملفات",
    desc: "يحذف الملفات أو المجلدات (يستخدم بحذر).",
    example: "rm file.txt",
    img: "images/rm.PNG"
  },
  {
    cmd: "cat",
    title: "عرض محتوى الملف",
    short: "قراءة ملف نصي",
    desc: "يعرض محتوى ملف نصي داخل الطرفية.",
    example: "cat notes.txt",
    img: "images/cat.PNG"
  },
  {
    cmd: "chmod",
    title: "تغيير الصلاحيات",
    short: "تعديل أذونات الملفات",
    desc: "يغير صلاحيات القراءة والكتابة والتنفيذ للملفات.",
    example: "chmod 755 script.sh",
    img: "images/chmod.PNG"
  }
];

let index = 0;

/* DOM ELEMENTS */
const counter = document.getElementById("counter");
const copyBtn = document.getElementById("copyBtn");

const cmd = document.getElementById("cmd");
const title = document.getElementById("title");
const short = document.getElementById("short");
const desc = document.getElementById("desc");
const example = document.getElementById("example");
const cmdImg = document.getElementById("cmdImg");

/* LOAD CARD */
function loadCard() {
  const c = commands[index];

  cmd.textContent = c.cmd;
  title.textContent = c.title;
  short.textContent = c.short;
  desc.textContent = c.desc;
  example.textContent = c.example;
  cmdImg.src = c.img;

  counter.textContent = `${index + 1} / ${commands.length}`;

  copyBtn.textContent = "نسخ الأمر";
  copyBtn.classList.remove("copied");
}

function copyCommand() {
  navigator.clipboard.writeText(commands[index].cmd).then(() => {
    copyBtn.textContent = "تم النسخ ✓";
    copyBtn.classList.add("copied");
    setTimeout(() => {
      copyBtn.textContent = "نسخ الأمر";
      copyBtn.classList.remove("copied");
    }, 1200);
  });
}

function nextCard() {
  index = (index + 1) % commands.length;
  loadCard();
}

function prevCard() {
  index = (index - 1 + commands.length) % commands.length;
  loadCard();
}

loadCard();
