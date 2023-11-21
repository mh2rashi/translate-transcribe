import { GetTranscriptionJobCommand, StartTranscriptionJobCommand, TranscribeClient } from "@aws-sdk/client-transcribe"

function getClient() {

    return new TranscribeClient({

        region: 'us-east-2',
        credentials: {

            accessKeyId: process.env.AWS_ACCESS_KEY,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        },

    });
}

function createTranscriptionCommand(filename) {

    return new StartTranscriptionJobCommand({

        TranscriptionJobName: filename,
        OutputBucketName: process.env.BUCKET_NAME,
        OutputKey: filename + '.transcribe',
        IdentifyLanguage: true,
        Media: {

            MediaFileUri: 's3://' + process.env.BUCKET_NAME + '/' + filename,

        },

    });

}

async function createTranscriptionJob(filename) {

    const transcribeClient = getClient();
    const transcriptionCommand = createTranscriptionCommand(filename);
    return transcribeClient.send(transcriptionCommand);

}

async function getJob(filename) {

    const transcribeClient = getClient();
    let jobStatusResult = null;
    try {
        const transcriptionJobStatusCommand = new GetTranscriptionJobCommand({
            TranscriptionJobName: filename,
        });

        jobStatusResult = await transcribeClient.send(
            transcriptionJobStatusCommand
        );
    } catch (e) { }


    return jobStatusResult;
}


export async function GET(req) {

    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const filename = searchParams.get('filename');

    // find ready transcription





    // Check if already transcribing
    const existingJob = await getJob(filename);

    if (existingJob) {

        return Response.json({

            status: existingJob.TranscriptionJob.TranscriptionJobStatus,

        })

    }


    // Create new transcription job
    if (!existingJobFound) {
        const newJob = await createTranscriptionJob(filename);

        return Response.json({

            status: newJob.TranscriptionJob.TranscriptionJobStatus,

        })

    }

    return Response.json(null);

}