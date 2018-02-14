var ajv = new (require('ajv'))()
var validate = ajv.compile(require('./schema'))
var valid = validate(require('./build'))
if (!valid) {
  console.error(validate.errors)
  process.exit(1)
}
