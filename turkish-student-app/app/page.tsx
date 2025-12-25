'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold">🎓 Türk Öğrenci Süper Uygulaması</h1>
          <p className="text-red-100 mt-1">Tüm ihtiyaçların tek bir yerde!</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto space-x-2 py-3">
            {[
              { id: 'home', label: 'Ana Sayfa', icon: '🏠' },
              { id: 'gpa', label: 'Not Hesaplama', icon: '📊' },
              { id: 'study', label: 'Ders Çalışma', icon: '📚' },
              { id: 'schedule', label: 'Ders Programı', icon: '📅' },
              { id: 'notes', label: 'Notlarım', icon: '📝' },
              { id: 'exams', label: 'Sınav Takvimi', icon: '📆' },
              { id: 'pomodoro', label: 'Pomodoro', icon: '⏱️' },
              { id: 'resources', label: 'Kaynaklar', icon: '💡' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-red-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeTab === 'home' && <HomePage />}
        {activeTab === 'gpa' && <GPACalculator />}
        {activeTab === 'study' && <StudyTimer />}
        {activeTab === 'schedule' && <Schedule />}
        {activeTab === 'notes' && <Notes />}
        {activeTab === 'exams' && <ExamCalendar />}
        {activeTab === 'pomodoro' && <PomodoroTimer />}
        {activeTab === 'resources' && <Resources />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>🇹🇷 Türk Öğrenciler için Özel Tasarlandı | 2025</p>
        </div>
      </footer>
    </div>
  );
}

function HomePage() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Hoş Geldiniz! 🎉
        </h2>
        <p className="text-xl text-gray-600 mb-6">
          Eğitim hayatınızı kolaylaştırmak için tasarlanmış tam özellikli süper uygulama
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Not Hesaplama', desc: 'GPA ve ortalama hesapla', icon: '📊', color: 'bg-blue-50' },
          { title: 'Ders Çalışma', desc: 'Zamanlayıcı ile çalış', icon: '📚', color: 'bg-green-50' },
          { title: 'Ders Programı', desc: 'Derslerini organize et', icon: '📅', color: 'bg-purple-50' },
          { title: 'Notlar', desc: 'Notlarını kaydet', icon: '📝', color: 'bg-yellow-50' },
          { title: 'Sınav Takvimi', desc: 'Sınavlarını takip et', icon: '📆', color: 'bg-red-50' },
          { title: 'Pomodoro', desc: 'Odaklanarak çalış', icon: '⏱️', color: 'bg-indigo-50' },
          { title: 'Kaynaklar', desc: 'Faydalı linkler', icon: '💡', color: 'bg-pink-50' },
          { title: 'İstatistikler', desc: 'İlerlemenizi görün', icon: '📈', color: 'bg-teal-50' },
        ].map((feature, idx) => (
          <div key={idx} className={`${feature.color} rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow border border-gray-100`}>
            <div className="text-4xl mb-3">{feature.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl shadow-lg p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">🎯 Başarı İpuçları</h3>
        <ul className="space-y-2">
          <li>✅ Düzenli çalışma saatleri belirleyin</li>
          <li>✅ Pomodoro tekniği ile odaklanın</li>
          <li>✅ Notlarınızı düzenli tutun</li>
          <li>✅ Hedeflerinizi belirleyin ve takip edin</li>
        </ul>
      </div>
    </div>
  );
}

function GPACalculator() {
  const [courses, setCourses] = useState([
    { name: '', credit: 0, grade: 0 }
  ]);

  const addCourse = () => {
    setCourses([...courses, { name: '', credit: 0, grade: 0 }]);
  };

  const updateCourse = (index: number, field: string, value: any) => {
    const newCourses = [...courses];
    newCourses[index] = { ...newCourses[index], [field]: value };
    setCourses(newCourses);
  };

  const calculateGPA = () => {
    let totalCredits = 0;
    let totalPoints = 0;
    courses.forEach(course => {
      totalCredits += Number(course.credit);
      totalPoints += Number(course.credit) * Number(course.grade);
    });
    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : '0.00';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">📊 Not Ortalaması Hesaplama</h2>

      <div className="space-y-4 mb-6">
        {courses.map((course, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
            <input
              type="text"
              placeholder="Ders Adı"
              value={course.name}
              onChange={(e) => updateCourse(index, 'name', e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <input
              type="number"
              placeholder="Kredi"
              value={course.credit || ''}
              onChange={(e) => updateCourse(index, 'credit', e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <select
              value={course.grade}
              onChange={(e) => updateCourse(index, 'grade', e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value={0}>Not Seçin</option>
              <option value={4.0}>AA (4.0)</option>
              <option value={3.5}>BA (3.5)</option>
              <option value={3.0}>BB (3.0)</option>
              <option value={2.5}>CB (2.5)</option>
              <option value={2.0}>CC (2.0)</option>
              <option value={1.5}>DC (1.5)</option>
              <option value={1.0}>DD (1.0)</option>
              <option value={0.5}>FD (0.5)</option>
              <option value={0.0}>FF (0.0)</option>
            </select>
            <button
              onClick={() => setCourses(courses.filter((_, i) => i !== index))}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Sil
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={addCourse}
        className="mb-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
      >
        + Ders Ekle
      </button>

      <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-2">GPA Ortalamanız</h3>
        <p className="text-6xl font-bold">{calculateGPA()}</p>
      </div>
    </div>
  );
}

function StudyTimer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [subject, setSubject] = useState('');

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(t => t + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">📚 Ders Çalışma Zamanlayıcı</h2>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Hangi konuyu çalışıyorsunuz?"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-12 text-white text-center mb-6">
        <div className="text-7xl font-bold mb-4">{formatTime(time)}</div>
        <p className="text-xl">{subject || 'Konu belirtilmedi'}</p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className={`flex-1 px-6 py-4 rounded-lg font-bold text-white transition-colors ${
            isRunning ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          {isRunning ? '⏸️ Duraklat' : '▶️ Başlat'}
        </button>
        <button
          onClick={() => { setTime(0); setIsRunning(false); }}
          className="flex-1 px-6 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-bold"
        >
          🔄 Sıfırla
        </button>
      </div>
    </div>
  );
}

function Schedule() {
  const days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma'];
  const hours = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">📅 Haftalık Ders Programı</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-red-600 text-white">
              <th className="border border-gray-300 p-3">Saat</th>
              {days.map(day => (
                <th key={day} className="border border-gray-300 p-3">{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {hours.map(hour => (
              <tr key={hour}>
                <td className="border border-gray-300 p-3 font-bold bg-gray-100">{hour}</td>
                {days.map(day => (
                  <td key={`${day}-${hour}`} className="border border-gray-300 p-3 hover:bg-red-50 cursor-pointer">
                    <div className="min-h-16"></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-gray-600 text-center">
        💡 İpucu: Hücrelere tıklayarak ders ekleyebilirsiniz (gelecek sürümde)
      </p>
    </div>
  );
}

function Notes() {
  const [notes, setNotes] = useState<Array<{title: string, content: string, date: string}>>([]);
  const [newNote, setNewNote] = useState({ title: '', content: '' });

  const addNote = () => {
    if (newNote.title && newNote.content) {
      setNotes([...notes, { ...newNote, date: new Date().toLocaleDateString('tr-TR') }]);
      setNewNote({ title: '', content: '' });
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">📝 Yeni Not Ekle</h2>

        <input
          type="text"
          placeholder="Not Başlığı"
          value={newNote.title}
          onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
          className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />

        <textarea
          placeholder="Not içeriği..."
          value={newNote.content}
          onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
          rows={6}
          className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />

        <button
          onClick={addNote}
          className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-bold"
        >
          ➕ Not Ekle
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map((note, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{note.title}</h3>
            <p className="text-sm text-gray-500 mb-3">{note.date}</p>
            <p className="text-gray-700 whitespace-pre-wrap">{note.content}</p>
            <button
              onClick={() => setNotes(notes.filter((_, i) => i !== index))}
              className="mt-4 text-red-600 hover:text-red-800 font-medium"
            >
              🗑️ Sil
            </button>
          </div>
        ))}
      </div>

      {notes.length === 0 && (
        <div className="bg-gray-50 rounded-xl p-12 text-center">
          <p className="text-gray-500 text-lg">Henüz not eklemediniz. Yukarıdan ilk notunuzu ekleyin! 📝</p>
        </div>
      )}
    </div>
  );
}

function ExamCalendar() {
  const [exams, setExams] = useState<Array<{course: string, date: string, time: string, location: string}>>([]);
  const [newExam, setNewExam] = useState({ course: '', date: '', time: '', location: '' });

  const addExam = () => {
    if (newExam.course && newExam.date) {
      setExams([...exams, newExam]);
      setNewExam({ course: '', date: '', time: '', location: '' });
    }
  };

  const sortedExams = [...exams].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">📆 Sınav Ekle</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Ders Adı"
            value={newExam.course}
            onChange={(e) => setNewExam({ ...newExam, course: e.target.value })}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
          <input
            type="date"
            value={newExam.date}
            onChange={(e) => setNewExam({ ...newExam, date: e.target.value })}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
          <input
            type="time"
            value={newExam.time}
            onChange={(e) => setNewExam({ ...newExam, time: e.target.value })}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Sınav Yeri"
            value={newExam.location}
            onChange={(e) => setNewExam({ ...newExam, location: e.target.value })}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
        </div>

        <button
          onClick={addExam}
          className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-bold"
        >
          ➕ Sınav Ekle
        </button>
      </div>

      <div className="space-y-4">
        {sortedExams.map((exam, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{exam.course}</h3>
                <p className="text-gray-600">📅 {new Date(exam.date).toLocaleDateString('tr-TR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                {exam.time && <p className="text-gray-600">🕐 {exam.time}</p>}
                {exam.location && <p className="text-gray-600">📍 {exam.location}</p>}
              </div>
              <button
                onClick={() => setExams(exams.filter((_, i) => i !== index))}
                className="text-red-600 hover:text-red-800 font-medium"
              >
                🗑️ Sil
              </button>
            </div>
          </div>
        ))}
      </div>

      {exams.length === 0 && (
        <div className="bg-gray-50 rounded-xl p-12 text-center">
          <p className="text-gray-500 text-lg">Henüz sınav eklemediniz. Yukarıdan sınavlarınızı ekleyin! 📆</p>
        </div>
      )}
    </div>
  );
}

function PomodoroTimer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            // Timer finished
            setIsRunning(false);
            if (!isBreak) {
              setIsBreak(true);
              setMinutes(5);
            } else {
              setIsBreak(false);
              setMinutes(25);
            }
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, minutes, seconds, isBreak]);

  const reset = () => {
    setIsRunning(false);
    setIsBreak(false);
    setMinutes(25);
    setSeconds(0);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">⏱️ Pomodoro Tekniği</h2>

      <div className={`rounded-xl p-12 text-white text-center mb-6 ${isBreak ? 'bg-gradient-to-r from-green-600 to-green-700' : 'bg-gradient-to-r from-red-600 to-red-700'}`}>
        <h3 className="text-2xl mb-4">{isBreak ? '☕ Mola Zamanı' : '📚 Çalışma Zamanı'}</h3>
        <div className="text-8xl font-bold mb-4">
          {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className={`flex-1 px-6 py-4 rounded-lg font-bold text-white transition-colors ${
            isRunning ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          {isRunning ? '⏸️ Duraklat' : '▶️ Başlat'}
        </button>
        <button
          onClick={reset}
          className="flex-1 px-6 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-bold"
        >
          🔄 Sıfırla
        </button>
      </div>

      <div className="bg-blue-50 rounded-lg p-6">
        <h4 className="font-bold text-gray-800 mb-3">🎯 Pomodoro Nedir?</h4>
        <ul className="space-y-2 text-gray-700">
          <li>✅ 25 dakika odaklanarak çalışın</li>
          <li>✅ 5 dakika mola verin</li>
          <li>✅ 4 pomodoro sonrası 15-30 dakika uzun mola</li>
          <li>✅ Dikkat dağıtıcı şeylerden uzak durun</li>
        </ul>
      </div>
    </div>
  );
}

function Resources() {
  const resources = [
    {
      category: '📚 Ders Materyalleri',
      links: [
        { title: 'Khan Academy Türkçe', url: 'https://tr.khanacademy.org/', desc: 'Ücretsiz online dersler' },
        { title: 'Açık Öğretim', url: 'https://www.anadolu.edu.tr/acikogretim', desc: 'Üniversite dersleri' },
        { title: 'YÖK Dersleri', url: 'https://yokdersleri.yok.gov.tr/', desc: 'Üniversite ders içerikleri' },
      ]
    },
    {
      category: '🎓 Sınav Hazırlık',
      links: [
        { title: 'ÖSYM', url: 'https://www.osym.gov.tr/', desc: 'Sınav duyuruları ve bilgiler' },
        { title: 'YÖK Atlas', url: 'https://yokatlas.yok.gov.tr/', desc: 'Üniversite tercihleri' },
      ]
    },
    {
      category: '💻 Yazılım & Teknoloji',
      links: [
        { title: 'BTK Akademi', url: 'https://www.btkakademi.gov.tr/', desc: 'Ücretsiz online eğitimler' },
        { title: 'Turkcell Geleceği Yazanlar', url: 'https://gelecegiyazanlar.turkcell.com.tr/', desc: 'Kodlama eğitimleri' },
      ]
    },
    {
      category: '📖 Kütüphane',
      links: [
        { title: 'YÖK Tez Merkezi', url: 'https://tez.yok.gov.tr/', desc: 'Tez ve araştırmalar' },
        { title: 'DergiPark', url: 'https://dergipark.org.tr/', desc: 'Akademik dergiler' },
      ]
    },
    {
      category: '🎯 Burs & Fırsatlar',
      links: [
        { title: 'YTB', url: 'https://www.ytb.gov.tr/', desc: 'Yurtdışı eğitim bursları' },
        { title: 'TÜBİTAK', url: 'https://www.tubitak.gov.tr/', desc: 'Bilimsel destek programları' },
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">💡 Faydalı Kaynaklar</h2>
        <p className="text-gray-600">Eğitim hayatınızda size yardımcı olacak web siteleri</p>
      </div>

      {resources.map((section, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">{section.category}</h3>
          <div className="space-y-4">
            {section.links.map((link, linkIdx) => (
              <a
                key={linkIdx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg hover:from-red-50 hover:to-red-100 transition-colors"
              >
                <h4 className="font-bold text-gray-800 mb-1">{link.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{link.desc}</p>
                <p className="text-xs text-blue-600">{link.url}</p>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}