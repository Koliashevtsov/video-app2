class FakeService {
    data = [
        {
            id: 1,
            snippet: {
                title: 'How to learn React',
                thumbnails: {
                    default: {
                        url: 'https://www.iotforall.com/wp-content/uploads/2016/12/How-to-Learn-React-Redux-%E2%80%93-Resources-and-Guide.jpg'
                    }
                }
            }
        },
        {
            id: 2,
            snippet: {
                title: 'React components is all',
                thumbnails: {
                    default: {
                        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaYuyCVN1Nb16bIue9traFQ8UQjuhXAcajIWpGVTq_wNtmhw-IJA'
                    }
                }
            }
        },
        {
            id: 3,
            snippet: {
                title: 'What is React',
                thumbnails: {
                    default: {
                        url: 'https://qph.fs.quoracdn.net/main-qimg-a1d69cafbafc5ae5a90eb7ec3e99abe0'
                    }
                }
            }
        }
    ]

    getVideos = (title) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (title === 'React') {
                    resolve(this.data);
                } else {
                    reject(new Error('Something bad happened'));
                }
            }, 700)
        });
    }
}

export default FakeService;
