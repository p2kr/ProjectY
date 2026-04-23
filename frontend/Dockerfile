# ─────────────────────────────────────────────────────────────────────────────
# Stage 1 — deps
# Install only production-like dependencies using Yarn
# ─────────────────────────────────────────────────────────────────────────────
FROM node:20-alpine AS deps

WORKDIR /app

# Enable Corepack so Yarn 4 (packageManager field) is used automatically
RUN corepack enable && corepack prepare yarn@4.5.3 --activate

COPY package.json yarn.lock .yarnrc.yml ./
RUN yarn install --frozen-lockfile

# ─────────────────────────────────────────────────────────────────────────────
# Stage 2 — builder
# ─────────────────────────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

RUN corepack enable && corepack prepare yarn@4.5.3 --activate

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN yarn build

# ─────────────────────────────────────────────────────────────────────────────
# Stage 3 — production
# Serve the static build with nginx
# ─────────────────────────────────────────────────────────────────────────────
FROM nginx:1.27-alpine AS production

# Copy compiled assets
COPY --from=builder /app/dist /usr/share/nginx/html

# Nginx config (SPA routing + caching headers)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Non-root user for security
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
