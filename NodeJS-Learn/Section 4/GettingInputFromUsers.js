console.log('Starting App uyyy')

const command = process.argv[2]

if (command === 'add') {
    console.log('Adding Note!')
} else if (command === 'remove') {
    console.log('Removing note!')
}
