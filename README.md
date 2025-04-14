https://github.com/user-attachments/assets/4d260ccd-b933-4a32-b3f8-f0a51452c645

## Development

### Run All

Without Docker service:
```bash
bash ./run-without-docker.sh
```

With:
```bash
bash ./run-with-docker.sh
```

### Dockerized Encoder (localhost:8000)

```bash
docker run veriffdocker/face-encoding-test-task:latest
```

### Server (localhost:8001)

Recommended go version is 1.24.1

```bash
cd server && go run .
```

### Client (localhost:5173)

1. Run

```bash
cd client && asdf install && pnpm i && pnpm dev
```

2. Open the app in a browser at `localhost:5173`

#### Tools

- [asdf](https://asdf-vm.com/)
- [pnpm](https://pnpm.io/)
- [Vite](https://v4.vite.dev/)
- [Lefthook](https://github.com/evilmartians/lefthook)
