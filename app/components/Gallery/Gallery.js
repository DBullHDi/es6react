import React, {Component} from 'react';

class Gallery extends Component {
    render() {
        return (
            <div>
                {
                    this.props.items.map((item, index) => {
                        let {title, imageLinks, infoLink} = item.volumeInfo;

                        return (
                            <a href={infoLink} target="blank" key={index}>
                                {title}
                                <div>

                                    <img src={imageLinks ? imageLinks.thumbnail : " "}
                                         alt="book image"/>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}

export default Gallery;