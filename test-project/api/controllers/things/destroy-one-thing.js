module.exports = {


  friendlyName: 'Destroy one thing',


  description: 'Delete the thing with the specified id from the database',


  inputs: {
    id: {
      type: 'number',
      required: true
    }
  },


  exits: {
    forbidden: {
      description: 'The user making this request is not permitted to delete this thing.',
      responseType: 'forbidden',
    }
  },


  fn: async function (inputs, exits) {

    let thing = await Thing.findOne({
      id: inputs.id
    });

    console.log(thing);

    if (thing.owner !== this.req.me.id) {
      throw 'forbidden';
    }

    await Thing.destroy({id: inputs.id});

    return exits.success();

  }


};
