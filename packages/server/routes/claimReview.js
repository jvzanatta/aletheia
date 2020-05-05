const ClaimReviewController = require("../api/controller/claimReviewController");
const Requester = require("../infra/interceptor/requester");

/**
 * The main router object
 */
const router = require("../lib/util").router();

/**
 * POST {domain}/claim
 */
router.post("/", (req, res, next) => {
    const claimReview = new ClaimReviewController();
    claimReview
        .create(req.body)
        .then(result => res.send(result))
        .catch(error => {
            next(Requester.internalError(res, error.message));
        });
});

/**
 * GET {domain}/claim{/id}
 */
router.get("/:id", (req, res, next) => {
    const claimReview = new ClaimReviewController();
    claimReview
        .getClaimReviewId(req.params.id)
        .then(result => res.send(result))
        .catch(error => {
            next(Requester.internalError(res, error.message));
        });
});

/**
 * DELETE {domain}/claim{/id}
 */
router.delete("/:id", (req, res, next) => {
    const claimReview = new ClaimReviewController();
    claimReview
        .delete(req.params.id)
        .then(result => res.send(result))
        .catch(error => {
            next(Requester.internalError(res, error.message));
        });
});

module.exports = function(appObj) {
    return {
        path: "/claimreview",
        api_version: 1,
        router
    };
};
