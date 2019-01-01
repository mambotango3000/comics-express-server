var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var comicModel = new Schema({
    aliases: {
        type: String
    },
    api_detail_url: {
        type: String
    },
    cover_date: {
        type: String
    },
    date_added: {
        type: String
    },
    date_last_updated: {
        type: String
    },
    deck: {
        type: String
    },
    description: {
        type: String
    },
    has_staff_review: {
        type: String
    },
    id: {
        type: Number
    },
    image: {
        icon_url: {
            type: String
        },
        medium_url: {
            type: String
        },
        screen_url: {
            type: String
        },
        screen_large_url: {
            type: String
        },
        small_url: {
            type: String
        },
        super_url: {
            type: String
        },
        thumb_url: {
            type: String
        },
        tiny_url: {
            type: String
        },
        original_url: {
            type: String
        },
        image_tags: {
            type: String
        }
    },
    issue_number: {
        type: String
    },
    name: {
        type: String
    },
    site_detail_url: {
        type: String
    },
    store_date: {
        type: String
    },
    volume: {
        api_detail_url: {
            type: String
        },
        id: {
            type: Number
        },
        name: {
            type: String
        },
        site_detail_url: {
            type: String
        }
    },
    resource_type: {
        type: String
    }
});

module.exports = mongoose.model('Comic', comicModel);