import { SubmitFeedbackUseCase } from './submit-feedback-use-case';

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    {create: createFeedbackSpy},
    {sendMail: sendMailSpy}
);

describe('Submit feedback', () => {

    it('should be able to submit feedback', async () => {

        expect(submitFeedback.execute({
            type: 'bug',
            comment: 'test',
            screenshot: 'data:image/png;base64,da2dadsad2a',
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });
    it('should be able to submit feedback same not having screenshot', async () => {

        expect(submitFeedback.execute({
            type: 'bug',
            comment: 'test',
        })).resolves.not.toThrow();

    });
    it('should not be able to submit feedback when the image type is different of base64', async () => {

        expect(submitFeedback.execute({
            type: 'bug',
            comment: 'test',
            screenshot: 'test',
        })).resolves.toThrow();

    });

    it('should not be able to submit feedback when comment not exist', async () => {

        expect(submitFeedback.execute({
            type: 'bug',
            comment: '',
            screenshot: 'data:image/png;base64,dsadasd23123123',
        })).resolves.toThrow();
    });
    it('should not be able to submit feedback, when type not exist', async () => {

        expect(submitFeedback.execute({
            type: '',
            comment: 'test',
            screenshot: 'data:image/png;base64,dsadasd23123123',
        })).resolves.toThrow();
    });
    
});