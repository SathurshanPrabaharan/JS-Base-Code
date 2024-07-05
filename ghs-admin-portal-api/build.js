const fs = require('fs')
const yaml = require('js-yaml')
const doc = yaml.safeLoad(fs.readFileSync('./app.yaml', 'utf8'))

doc.env_variables.ENV = process.env.ENV
doc.env_variables.SERVICE_NAME = process.env.SERVICE_NAME
doc.env_variables.IAP_CLIENT_ID = process.env.IAP_CLIENT_ID
doc.env_variables.DEFAULT_SECRET_NAME = process.env.DEFAULT_SECRET_NAME

doc.env_variables.ADMIN_PORTAL = process.env.ADMIN_PORTAL
doc.env_variables.CUSTOMER_PORTAL = process.env.CUSTOMER_PORTAL


fs.writeFile('./app.yaml', yaml.safeDump(doc), (err) => {
    if (err) {
        console.log(err)
    }
})
