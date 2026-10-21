# @toando/apis

Official, auto-generated TypeScript/JavaScript client SDK containing [ConnectRPC](https://connectrpc.com) compatible service definitions for all **Toando APIs**.

## Source Definitions
This package is automatically generated from protocol buffers definitions using the [Buf CLI](https://buf.build/product/cli). If you need to view the raw `.proto` structures, visit the parent [GitHub repository](https://github.com/Toandos/apis).

## Installation

Install the package via npm, yarn, or pnpm alongside the required ConnectRPC runtime dependencies:

```bash
npm install @toando/apis @connectrpc/connect @connectrpc/connect-node
```

## Quick Start (ConnectRPC Example)

Here is a quick example of how to import the auto-generated definitions and fetch a resource using a client.

```typescript
import { createClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-node";

// Import generated service definitions
import { BookService } from "@toando/apis/books/v1alpha1/book_pb.js";

// Setup transport
const transport = createConnectTransport({
  baseUrl: "https://backend.books:8080",
  httpVersion: "2"
});

// Instantiate type-safe client
const client = createClient(BookService, transport);

// Use client RPCs
const response = await client.getBook({ id: "example_book_id" });
```