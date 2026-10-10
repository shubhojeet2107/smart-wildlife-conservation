# Smart Wildlife Conservation & Protected Area Management

Starter monorepo for a team-built application using Java 21, Spring Boot, Spring Data JPA, PostgreSQL, REST APIs, and React.

## Included
- 7 independent Spring Boot services (each has its own port and PostgreSQL database)
- React + Vite frontend starter
- PostgreSQL Docker Compose setup that creates the service databases
- Health endpoints and placeholder REST endpoints
- Team workflow, module ownership, API conventions, and implementation checklist

> This is a skeleton, not the completed application. CRUD, authentication, business rules, and full API contracts still need to be implemented.

## Prerequisites
- Java 21
- Maven 3.9+
- Docker Desktop (or local PostgreSQL 16+)
- Node.js 20.19+ and npm

## Quick start

### 1. Start PostgreSQL
From the repository root:
```bash
docker compose up -d postgres
```
The container creates these databases on first initialization:
`wildlife_db`, `protected_area_db`, `patrol_db`, `incident_db`, `rescue_db`, `resource_db`, `conservation_db`.

Default local development credentials are in `.env.example`. For a local student project, the Compose file uses the same values. Do not use these credentials in production.

If you have already initialized the `wildlife-postgres` volume before changing the init script, remove the volume and recreate it to rerun database initialization:
```bash
docker compose down -v
docker compose up -d postgres
```
This deletes the local development database volume.

### 2. Run one or more backend services
Open a terminal in the repository root and run, for example:
```bash
mvn -pl services/wildlife-service spring-boot:run
```
Run other services by changing the module path:
- `services/protected-area-service`
- `services/patrol-service`
- `services/incident-service`
- `services/rescue-service`
- `services/resource-service`
- `services/conservation-service`

Each service exposes:
- `GET http://localhost:<port>/api/v1/health`
- One module-specific placeholder endpoint, documented in `docs/API_CONTRACTS.md`

Ports:
| Service | Port |
|---|---:|
| Wildlife | 8081 |
| Protected Area | 8082 |
| Patrol | 8083 |
| Incident | 8084 |
| Rescue | 8085 |
| Resource & User | 8086 |
| Conservation | 8087 |

### 3. Run the frontend
```bash
cd frontend
npm install
npm run dev
```
Vite prints the local URL (usually `http://localhost:5173`).

The frontend currently has a starter dashboard and service-health links. It does not yet have login or full CRUD screens.

## Team parallel-work plan
Read `docs/TEAM_WORKFLOW.md` before splitting tasks. Each teammate should own one service/module and its API, database tables, tests, and documentation. Agree on API contracts before implementing cross-service calls.

## Architecture rule
Each service owns its database. Do not connect one service directly to another service's tables. Use REST APIs to exchange data. For example, store `zoneId` in an incident record and use the Protected Area API when the zone name/details are needed.

## Build all backend modules
```bash
mvn clean package
```

## Security note
The starter uses development-only credentials and does not yet include production-ready authentication/authorization. Add Spring Security, password hashing, request validation, and secret management before deployment.
