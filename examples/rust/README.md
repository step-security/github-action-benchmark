Rust example for benchmarking with `cargo bench`
================================================

- [Workflow for this example](../../.github/workflows/rust.yml)

This directory shows how to use [`github-action-benchmark`](https://github.com/step-security/github-action-benchmark)
with [`cargo bench`](https://doc.rust-lang.org/cargo/commands/cargo-bench.html).

## Run benchmarks

Official documentation for usage of `cargo bench`:

https://doc.rust-lang.org/unstable-book/library-features/test.html

e.g.

```yaml
- name: Run benchmark
  run: cargo +nightly bench | tee output.txt
```

Note that `cargo bench` is available only with nightly toolchain.

Note that this example does not use LTO for benchmarking because entire code in benchmark iteration
will be removed as dead code. For normal use case, please enable it in `Cargo.toml` for production
performance.

```yaml
[profile.bench]
lto = true
```

## Process benchmark results

Store the benchmark results with step using the action. Please set `cargo` to `tool` input.

```yaml
- name: Store benchmark result
  uses: step-security/github-action-benchmark@v1
  with:
    tool: 'cargo'
    output-file-path: output.txt
```

Please read ['How to use' section](https://github.com/step-security/github-action-benchmark#how-to-use) for common usage.

