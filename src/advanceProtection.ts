// enum Type {Strong, Week}

// class Java {
//   helloJava() {
//     console.log('Hello Java')
//   }
//   java: any
// }

// class JavaScript {
//   helloJavaScript() {
//     console.log('Hello JavaScript')
//   }
//   javaScript: any
// }

// function isJava(lang: Java | JavaScript): lang is Java {
//   return (lang as Java).helloJava !== undefined
// }

// function getLanguage(type: Type, x: string | number) {
//   let lang = type === Type.Strong ? new Java() : new JavaScript()

//   if (isJava(lang)) {
//     lang.helloJava()
//   } else {
//     lang.helloJavaScript()
//   }


//   // if ((lang as Java).helloJava) {
//   //   (lang as Java).helloJava()
//   // } else {
//   //   (lang as JavaScript).helloJavaScript()
//   // }
//   // if (lang instanceof Java) {
//   //   lang.helloJava()
//   // } else {
//   //   lang.helloJavaScript()
//   // }
//   // if ('java' in lang) {
//   //   lang.helloJava()
//   // } else {
//   //   lang.helloJavaScript()
//   // }
//   // if (typeof x === 'string') {
//   //   x.length
//   // } else {
//   //   x.toFixed(2)
//   // }
//   return lang
// }

// // getLanguage(Type.Strong)