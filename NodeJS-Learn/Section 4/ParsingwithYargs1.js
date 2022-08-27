const yargs = require('yargs')

yargs.version('1.1.0')

yargs.command({
    command: 'tambah',
    describe: 'add a new note',
    handler: function () {
        console.log('Tambah Node Baru')
    }
})

console.log(yargs.argv)