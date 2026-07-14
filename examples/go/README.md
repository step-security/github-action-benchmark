Go example for benchmarking with `go test -bench`
=================================================

- [Workflow for this example](../../.github/workflows/go.yml)

This directory shows how to use [`github-action-benchmark`](https://github.com/step-security/github-action-benchmark)
with `go test -bench` command.

## Run benchmarks

Official documentation for usage of `go test -bench`:

https://pkg.go.dev/testing#hdr-Benchmarks

e.g.

```yaml
- name: Run benchmark
  run: go test -bench 'Benchmark' | tee output.txt
```

## Process benchmark results

Store the benchmark results with step using the action. Please set `go` to `tool` input.

```yaml
- name: Store benchmark result
  uses: step-security/github-action-benchmark@v1
  with:
    tool: 'go'
    output-file-path: output.txt
```

Please read ['How to use' section](https://github.com/step-security/github-action-benchmark#how-to-use) for common usage.
