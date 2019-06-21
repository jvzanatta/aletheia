'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const claimReviewSchema = new Schema({
    classification: {
        type: String,
        validate: {
            validator() {
                return [
                    'not-fact',
                    'true',
                    'true-but',
                    'arguable',
                    'misleading',
                    'false',
                    'unsustainable',
                    'exaggerated',
                    'unverifiable'
                ].indexOf() !== -1;
            }
        },
        message: tag => `${tag} is not a valid classification.`
    },
    claims: {
        type: mongoose.Schema.ObjectId,
        ref: 'Claim',
        required: true
    },
    sentence_hash: {
        type: String,
        required: true
    },
    sentence_content: {
        type: String,
        required: true
    }
    // TODO: user_id
    // TODO: user_agent
    // TODO: revision_id
});

module.exports = mongoose.model('ClaimReview', claimReviewSchema);
