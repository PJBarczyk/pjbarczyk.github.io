// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "collection of projects worth mentioning I dabbled with",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-code-completion-for-external-python-libraries-in-scripts-with-uv",
        
          title: "code completion for external Python libraries in scripts with uv",
        
        description: "a brief guide on how to access and use the uv-generated virtual environment in your IDE for code completion",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/uv-script-code-completion/";
          
        },
      },{id: "projects-capijournal",
          title: 'CapiJournal',
          description: "AI-powered conversational journal with voice-only interface",
          section: "Projects",handler: () => {
              window.location.href = "/projects/capijournal/";
            },},{id: "projects-capilink",
          title: 'CapiLink',
          description: "Remote control IoT system",
          section: "Projects",handler: () => {
              window.location.href = "/projects/capilink/";
            },},{id: "projects-deadline",
          title: 'Deadline',
          description: "Asymmetric VR multiplayer game about exploring dungeons and missing deadlines",
          section: "Projects",handler: () => {
              window.location.href = "/projects/deadline/";
            },},{id: "projects-heroes-divided",
          title: 'Heroes Divided',
          description: "Getting rid of an adventure party one hero at a time; a 24-hour game jam project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/heroes-divided/";
            },},{id: "projects-sliding-tactics",
          title: 'Sliding Tactics',
          description: "Isometric shooter with smart-ish enemies and terrain manipulation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sliding-tactics/";
            },},{id: "projects-vr-excergame",
          title: 'VR Excergame',
          description: "Gamified limber excercises in virtual reality.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/zpi/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%70%6A%62%61%72%63%7A%79%6B@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/PJBarczyk", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
