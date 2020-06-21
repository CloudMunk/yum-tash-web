const DefaultLayout = ({ children }) => (
    <div>
      <header>
     
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-170228462-1"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments)}
    gtag('js', new Date());

    gtag('config', 'UA-170228462-1');
    </script>

        <h1>Next.js & Prismic.io Blog</h1>
      </header>
      <main>{children}</main>
    </div>
  );
  
  export default DefaultLayout;