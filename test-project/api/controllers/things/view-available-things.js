module.exports = {


  friendlyName: 'View available things',


  description: 'Display "Available things" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/things/available-things'
    }

  },


  fn: async function (inputs, exits) {

    // TODO: Only fetch things the user is supposed to see
    var things = await Thing.find({
      owner: this.req.me.id
    });

    // Respond with view.
    return exits.success({
      things
    });

  }


};
