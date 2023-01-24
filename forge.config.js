module.exports = {
  packagerConfig: {
    icon:"./logo.ico"
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        authors: "Ines HAMIDI",
        description: 'a simple app for non verbal folks'
      },
    },
  ],
};
