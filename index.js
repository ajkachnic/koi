module.exports={template:(s,o={},t=false)=>{m=s.match(/{{ *[a-zA-Z_.]+ *}}/g);m&&m.forEach(m=>s=s.replace(m,o[m.slice(2,-2).trim()]||t?eval(`throw Error('${ m } not found')`):m));return s}};