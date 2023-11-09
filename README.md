# Connect

![](https://github.com/swipelux/Connect/actions/workflows/ci.yml/badge.svg)
![](https://github.com/swipelux/Connect/actions/workflows/codeql-analysis.yml/badge.svg)
![](https://github.com/swipelux/Connect/actions/workflows/release.yml/badge.svg)

**The best way to connect a wallet 🌈**

Connect is a fork of the RainbowKit project. Connect is a [React](https://reactjs.org/) library that makes it easy to add wallet connection to your dapp.

- 🔥 Out-of-the-box wallet management
- ✅ Easily customizable
- 🦄 Built on top of [wagmi](https://wagmi.sh) and [viem](https://viem.sh)

## Quick start

You can scaffold a new RainbowKit + [wagmi](https://wagmi.sh) + [Next.js](https://nextjs.org) app with one of the following commands, using your package manager of choice:

```bash
npm init @swipelux/connect@latest
# or
pnpm create @swipelux/connect@latest
# or
yarn create @swipelux/connect
```

## Documentation

Connect is a fork of the RainbowKit project. For full documentation, visit [rainbowkit.com](https://rainbowkit.com).

### Try it out

You can use the CodeSandbox links below try out Connect:

- with [Create React App](https://codesandbox.io/p/sandbox/github/swipelux/Connect/tree/main/examples/with-create-react-app)
- with [Next.js](https://codesandbox.io/p/sandbox/github/swipelux/Connect/tree/main/examples/with-next)
- with [Next.js App Router](https://codesandbox.io/p/sandbox/github/swipelux/Connect/tree/main/examples/with-next-app)
- with [Remix](https://codesandbox.io/p/sandbox/github/swipelux/Connect/tree/main/examples/with-remix)
- with [Vite](https://codesandbox.io/p/sandbox/github/swipelux/Connect/tree/main/examples/with-vite)

## Examples

The following examples are provided in the [examples](./examples/) folder of this repo.

- `with-create-react-app`
- `with-next`
- `with-next-app`
- `with-next-custom-button`
- `with-next-mint-nft`
- `with-next-siwe-next-auth`
- `with-next-siwe-iron-session`
- `with-remix`
- `with-vite`

### Running examples

To run an example locally, install dependencies.

```bash
pnpm install
```

Then go into an example directory, eg: `with-next`.

```bash
cd examples/with-next
```

Then run the dev script.

```bash
pnpm run dev
```

## Contributing

Please follow our [contributing guidelines](./.github/CONTRIBUTING.md).

## License

Licensed under the MIT License, Copyright © 2022-present [Rainbow](https://rainbow.me).

See [LICENSE](./LICENSE) for more information.
