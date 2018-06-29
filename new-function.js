/**
* @param context {WebtaskContext}
*/
module.exports = function(context, cb) {
  let worldsbiggestsecret = "something";
  cb(null, { hello: context.query.name || 'Anonymous' });
};