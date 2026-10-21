This is the central **GitOps repository** for orchestrating the deployment of [books.toando.de](https://books.toando.de). It contains deployment configurations, environment states and tests regarding the product as a whole. It does not contain source code or raw Helm charts.

## 📖 Documentation
### Platform resources
Global cluster primitives, custom resource definitions (CRDs) and foundational access rules are managed centrally in [this repository](https://github.com/Toandos/gitops).

### Applications & Packages
Documentation for the applications and packages contained by the product can be found in their respective repositories:
* [Frontend](https://github.com/Toandos/books-frontend)
* [RPC](https://github.com/Toandos/books-rpc)
* [Backend](https://github.com/Toandos/books-backend)