// filepath: c:\Users\princ\Desktop\Learn_react\movie_app\app\footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-6xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Movie App. All rights reserved.</p>
      </div>
    </footer>
  );
}