const gulp = require('gulp');

const showGulp = (done) => {
    const user = {
        name: 'Adam'
    }
    console.log(user.name);
    done()
}

// function text1(done) {
//     console.log('1234');
//     done()
// }

// function text2(done) {
//     console.log('ABCD');
//     done()
// }

// exports.showtextS = gulp.series(text1, text2)
// exports.showtextP = gulp.parallel(text1, text2)

exports.showGulp = showGulp