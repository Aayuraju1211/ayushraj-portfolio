const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-heading text-sm text-foreground">Ayush Raj</p>
      <p className="text-muted-foreground text-[13px]">
        © {new Date().getFullYear()} — Built with intention.
      </p>
    </div>
  </footer>
);

export default Footer;
