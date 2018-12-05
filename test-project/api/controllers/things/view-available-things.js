module.exports = {


  friendlyName: 'View available things',


  description: 'Display "Available things" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/things/available-things'
    }

  },


  fn: async function (inputs, exits) {

    let things = [
      {
        id: 1,
        label: 'First Thing'
      },
      {
        id: 2,
        label: 'Second Thing'
      },
      {
        id: 3,
        label: 'Another Thing'
      }
    ];

    // Respond with view.
    return exits.success({
      things
    });

  }


};
