
    import _ from 'lodash';



    alert("index.js being invoked");

    console.log("index.js being invoked");

    function component () {

        var element = document.createElement('div');

        // Lodash, currently included via a script, is required for this line to work
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');

        return element;
    }

    document.body.appendChild( component() );
