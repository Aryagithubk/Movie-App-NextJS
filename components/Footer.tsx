export default function Footer() {
  return (
    <footer className="w-full mt-12 py-6 bg-card border-t text-center text-muted-foreground">
      <span>
        &copy; {new Date().getFullYear()} Movie App. Built with{" "}
        <span className="text-primary font-semibold">💌 by Krisha Arya</span>
      </span>
    </footer>
  );
}
