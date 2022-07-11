export interface ITheme {
  palette: {
    gray: {
      black: string;
      gray0: string;
      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;
      gray5: string;
      gray6: string;
      gray7: string;
      white: string;
    };
    fontWeight: {
      thin: number;
      extraLight: number;
      light: number;
      regular: number;
      medium: number;
      semiBold: number;
      bold: number;
      extraBold: number;
      black: number;
    };
    hue: {
      mint: string;
      red: string;
      gray: string;
    };
  };
}

const theme: ITheme = {
  palette: {
    gray: {
      black: '#000000',
      gray0: '#2d2d32',
      gray1: '#444444',
      gray2: '#666666',
      gray3: '#999999',
      gray4: '#bfbfbf',
      gray5: '#dddddd',
      gray6: '#f3f3f3',
      gray7: '#f7f7f7',
      white: '#ffffff',
    },
    fontWeight: {
      thin: 100,
      extraLight: 200,
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
      black: 900,
    },
    hue: {
      mint: '#2ac1bc',
      red: '#f45452',
      gray: '#999999',
    },
  },
};

export default theme;
