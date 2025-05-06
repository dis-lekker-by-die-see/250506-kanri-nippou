// // interface JsPDF {
// //   addFileToVFS: (filename: string, data: string) => void;
// //   addFont: (ttfFilename: string, fontName: string, fontStyle: string) => void;
// //   setFont: (fontName: string, fontStyle?: string) => void;
// //   autoTable: (options: any) => void;
// //   setFillColor: (r: number, g: number, b: number) => void;
// //   rect: (x: number, y: number, w: number, h: number, style: string) => void;
// //   setTextColor: (r: number, g: number, b: number) => void;
// //   setFontSize: (size: number) => void;
// //   text: (text: string, x: number, y: number, options?: any) => void;
// //   setDrawColor: (r: number) => void;
// //   line: (x1: number, y1: number, x2: number, y2: number) => void;
// //   save: (filename: string) => void;
// //   getCurrentPageInfo: () => { pageNumber: number };
// //   getNumberOfPages: () => number;
// //   lastAutoTable: { finalY: number };
// // }

// // interface JsPDFConstructor {
// //   new (options: { orientation: string; unit: string }): JsPDF;
// // }

// // // Augment the Window interface to include jspdf
// // declare global {
// //   interface Window {
// //     jspdf: { jsPDF: JsPDFConstructor };
// //   }
// // }

// interface JsPDF {
//   addFileToVFS: (filename: string, data: string) => void;
//   addFont: (ttfFilename: string, fontName: string, fontStyle: string) => void;
//   setFont: (fontName: string, fontStyle?: string) => void;
//   autoTable: (options: any) => void;
//   setFillColor: (r: number, g: number, b: number) => void;
//   rect: (x: number, y: number, w: number, h: number, style: string) => void;
//   setTextColor: (r: number, g: number, b: number) => void;
//   setFontSize: (size: number) => void;
//   text: (text: string, x: number, y: number, options?: any) => void;
//   setDrawColor: (r: number) => void;
//   line: (x1: number, y1: number, x2: number, y2: number) => void;
//   save: (filename: string) => void;
//   getCurrentPageInfo: () => { pageNumber: number };
//   getNumberOfPages: () => number;
//   lastAutoTable: { finalY: number };
// }

// interface JsPDFConstructor {
//   new (options: { orientation: string; unit: string }): JsPDF;
// }

// // Augment the Window interface to include jspdf
// declare global {
//   interface Window {
//     jspdf: {
//       jsPDF: JsPDFConstructor;
//     };
//   }
// }
