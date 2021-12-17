const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: 'Yael',
          last: 'Yañez',
        },
        picture: {
          large: 'http://randomuser.me/api/portraits/men/39.jpg',
        },
        login: {
          username: 'yaelyanez',
        },
      },
      {
        name: {
          first: 'Yael',
          last: 'Yañez',
        },
        picture: {
          large: 'http://randomuser.me/api/portraits/men/39.jpg',
        },
        login: {
          username: 'yaelyanez',
        },
      },
      {
        name: {
          first: 'Yael',
          last: 'Yañez',
        },
        picture: {
          large: 'http://randomuser.me/api/portraits/men/39.jpg',
        },
        login: {
          username: 'yaelyanez',
        },
      },
      {
        name: {
          first: 'Yael',
          last: 'Yañez',
        },
        picture: {
          large: 'http://randomuser.me/api/portraits/men/39.jpg',
        },
        login: {
          username: 'yaelyanez',
        },
      },
      {
        name: {
          first: 'Yael',
          last: 'Yañez',
        },
        picture: {
          large: 'http://randomuser.me/api/portraits/men/39.jpg',
        },
        login: {
          username: 'yaelyanez',
        },
      },
    ],
  },
};

const mockAxiosResponse = {
  get: jest.fn().mockResolvedValue(mockResponse),
};

export default mockAxiosResponse;
