"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitFeedbackUseCase = void 0;
class SubmitFeedbackUseCase {
    constructor(feedbackRepository, mailAdapter) {
        this.feedbackRepository = feedbackRepository;
        this.mailAdapter = mailAdapter;
    }
    async execute(data) {
        const { type, comment, screenshot } = data;
        if (!type || !comment) {
            throw new Error('Type and comment are required');
        }
        if (screenshot && screenshot.startsWith('data:image/png;base64,')) {
            throw new Error('Screenshot must be a base64 encoded image');
        }
        await this.feedbackRepository.create({
            type,
            comment,
            screenshot,
        });
        await this.mailAdapter.sendMail({
            subject: "Feedback",
            body: [
                `<h1>Feedback do site</h1>`,
                `<p>Tipo: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
                `<p>Screenshot: ${screenshot}</p>`,
            ].join('\n')
        });
    }
}
exports.SubmitFeedbackUseCase = SubmitFeedbackUseCase;
