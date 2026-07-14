import * as core from '@actions/core';
import { configFromJobInput } from './config';
import { extractResult } from './extract';
import { writeBenchmark } from './write';
import { validateSubscription } from './subscription';

async function main() {
    await validateSubscription();
    const config = await configFromJobInput();
    if (config.githubToken) {
        core.setSecret(config.githubToken);
    }
    core.debug(`Config extracted from job: ${config}`);

    const bench = await extractResult(config);
    core.debug(`Benchmark result was extracted: ${bench}`);

    await writeBenchmark(bench, config);

    console.log('github-action-benchmark was run successfully!', '\nData:', bench);
}

main().catch((e) => core.setFailed(e.message));
