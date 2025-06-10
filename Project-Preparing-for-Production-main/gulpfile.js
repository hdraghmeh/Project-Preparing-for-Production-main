import gulp from 'gulp'
import shell from 'gulp-shell'

export const build = shell.task(['parcel build starter/index.html'])
export const serve = shell.task(['parcel starter/index.html'])
export const test = shell.task(['mocha'])

export const e2e = shell.task(['npx cypress run'])

export default serve
