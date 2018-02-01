'user strict';

describe('Users factory', function() {
  let Users;

  let userList = [
    {
      id: '1',
      name: 'Jane',
      role: 'Designer',
      location: 'New York',
      twitter: 'gijane'
    },
    {
      id: '2',
      name: 'Bob',
      role: 'Developer',
      location: 'New York',
      twitter: 'billybob'
    },
    {
      id: '3',
      name: 'Jim',
      role: 'Developer',
      location: 'Chicago',
      twitter: 'jimbo'
    },
    {
      id: '4',
      name: 'Bill',
      role: 'Designer',
      location: 'LA',
      twitter: 'dabill'
    }
  ];

  let singleUser = {
    id: '2',
    name: 'Bob',
    role: 'Developer',
    location: 'New York',
    twitter: 'billybob'
  }

  beforeEach(angular.mock.module('api.users'));
  beforeEach(inject(function(_Users_){
    Users = _Users_;
  }));

  it('should exist', () => {
    expect(Users).toBeDefined();
  });

  describe('.all()', () => {
    it('should exist', () => {
      expect(Users.all).toBeDefined();
    });
    it('should return a list of users', () => {
      expect(Users.all()).toEqual(userList);
    });
  });

  describe('.findById()', () => {
    it('should exist', () => {
      expect(Users.findById).toBeDefined();
    });
    it('should return one user object if it exists', () => {
      expect(Users.findById('2')).toEqual(singleUser);
    });
    it('should return undefined if the user cannot be found', () => {
      expect(Users.findById('ABC')).not.toBeDefined();
    });
  });
});