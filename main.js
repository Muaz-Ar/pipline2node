function main(event) {
    return "Hello world";
}

if (require.main === module) {
    console.log(main());
}

module.exports = main;