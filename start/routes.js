'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|---------------------, environment: Env.get('NODE_ENV')-----------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON alterado', environment: Env.get('NODE_ENV')}
})
