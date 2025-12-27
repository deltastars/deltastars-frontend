#!/bin/bash

################################################################################
# Deltastars Frontend - Setup Script
# 
# This script sets up the development environment for deltastars-frontend
# including dependency installation, environment configuration, and build setup.
#
# Usage: ./setup.sh [options]
# Options:
#   --dev          Setup for development environment
#   --prod         Setup for production environment
#   --docker       Setup Docker support
#   --help         Display help message
################################################################################

set -e  # Exit on error

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Script variables
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$SCRIPT_DIR"
NODE_MIN_VERSION="14"
NPM_MIN_VERSION="6"
ENVIRONMENT="development"
SETUP_DOCKER=false
VERBOSE=false

################################################################################
# Helper Functions
################################################################################

print_header() {
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
}

print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ $1${NC}"
}

show_help() {
    cat << EOF
Deltastars Frontend Setup Script

Usage: ./setup.sh [options]

Options:
    --dev           Setup for development environment (default)
    --prod          Setup for production environment
    --docker        Setup Docker support
    --verbose       Enable verbose output
    --help          Display this help message

Examples:
    ./setup.sh                  # Standard development setup
    ./setup.sh --prod           # Production environment setup
    ./setup.sh --dev --docker   # Development with Docker
    ./setup.sh --verbose        # Verbose output for debugging

EOF
}

################################################################################
# System Checks
################################################################################

check_command_exists() {
    if ! command -v "$1" &> /dev/null; then
        return 1
    fi
    return 0
}

check_node_version() {
    print_info "Checking Node.js version..."
    
    if ! check_command_exists node; then
        print_error "Node.js is not installed"
        echo "Please install Node.js from https://nodejs.org/"
        return 1
    fi
    
    NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
    NODE_FULL_VERSION=$(node -v)
    
    if [ "$NODE_VERSION" -lt "$NODE_MIN_VERSION" ]; then
        print_error "Node.js version $NODE_MIN_VERSION or higher is required"
        echo "Current version: $NODE_FULL_VERSION"
        return 1
    fi
    
    print_success "Node.js version: $NODE_FULL_VERSION"
    return 0
}

check_npm_version() {
    print_info "Checking npm version..."
    
    if ! check_command_exists npm; then
        print_error "npm is not installed"
        return 1
    fi
    
    NPM_VERSION=$(npm -v | cut -d'.' -f1)
    NPM_FULL_VERSION=$(npm -v)
    
    if [ "$NPM_VERSION" -lt "$NPM_MIN_VERSION" ]; then
        print_warning "npm version $NPM_MIN_VERSION or higher is recommended"
        echo "Current version: $NPM_FULL_VERSION"
    else
        print_success "npm version: $NPM_FULL_VERSION"
    fi
    return 0
}

check_git() {
    print_info "Checking Git installation..."
    
    if ! check_command_exists git; then
        print_error "Git is not installed"
        return 1
    fi
    
    GIT_VERSION=$(git --version)
    print_success "$GIT_VERSION"
    return 0
}

run_system_checks() {
    print_header "System Requirements Check"
    
    check_node_version || exit 1
    check_npm_version || exit 1
    check_git || exit 1
    
    print_success "All system requirements are met"
    echo ""
}

################################################################################
# Environment Setup
################################################################################

setup_env_file() {
    print_header "Setting Up Environment Configuration"
    
    ENV_FILE="$PROJECT_ROOT/.env"
    ENV_EXAMPLE="$PROJECT_ROOT/.env.example"
    
    if [ -f "$ENV_FILE" ]; then
        print_warning ".env file already exists, skipping creation"
    elif [ -f "$ENV_EXAMPLE" ]; then
        print_info "Creating .env file from .env.example..."
        cp "$ENV_EXAMPLE" "$ENV_FILE"
        print_success ".env file created"
        print_info "Please update .env with your configuration values"
    else
        print_info "Creating default .env file..."
        cat > "$ENV_FILE" << EOF
# Deltastars Frontend Environment Configuration
# Development Environment

# API Configuration
REACT_APP_API_URL=http://localhost:3001
REACT_APP_API_TIMEOUT=10000

# Feature Flags
REACT_APP_ENABLE_DEBUG=false
REACT_APP_ENABLE_ANALYTICS=true

# Build Configuration
NODE_ENV=$ENVIRONMENT

EOF
        print_success ".env file created with default configuration"
    fi
    
    echo ""
}

################################################################################
# Dependencies Installation
################################################################################

install_dependencies() {
    print_header "Installing Dependencies"
    
    cd "$PROJECT_ROOT"
    
    print_info "Running 'npm install'..."
    
    if [ "$VERBOSE" = true ]; then
        npm install
    else
        npm install --silent
    fi
    
    print_success "Dependencies installed successfully"
    echo ""
}

################################################################################
# Git Hooks Setup
################################################################################

setup_git_hooks() {
    print_header "Setting Up Git Hooks"
    
    HOOKS_DIR="$PROJECT_ROOT/.git/hooks"
    
    if [ ! -d "$HOOKS_DIR" ]; then
        print_warning "Git hooks directory not found, skipping git hooks setup"
        return 0
    fi
    
    # Pre-commit hook
    if check_command_exists husky; then
        print_info "Installing Husky git hooks..."
        npx husky install 2>/dev/null || print_warning "Husky installation skipped"
    else
        print_info "Husky not installed, skipping pre-commit hooks"
    fi
    
    print_success "Git hooks setup complete"
    echo ""
}

################################################################################
# Build Setup
################################################################################

build_project() {
    print_header "Building Project"
    
    cd "$PROJECT_ROOT"
    
    if [ "$ENVIRONMENT" = "production" ]; then
        print_info "Building for production..."
        npm run build || exit 1
    else
        print_info "Skipping build for development environment"
        print_info "Run 'npm run build' manually when needed"
    fi
    
    print_success "Build setup complete"
    echo ""
}

################################################################################
# Docker Setup
################################################################################

setup_docker() {
    if [ "$SETUP_DOCKER" = false ]; then
        return 0
    fi
    
    print_header "Setting Up Docker"
    
    if ! check_command_exists docker; then
        print_warning "Docker is not installed, skipping Docker setup"
        return 0
    fi
    
    DOCKERFILE="$PROJECT_ROOT/Dockerfile"
    DOCKERIGNORE="$PROJECT_ROOT/.dockerignore"
    
    if [ ! -f "$DOCKERFILE" ]; then
        print_info "Creating Dockerfile..."
        cat > "$DOCKERFILE" << 'EOF'
# Build stage
FROM node:16-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production stage
FROM node:16-alpine

WORKDIR /app

RUN npm install -g serve

COPY --from=builder /app/build ./build

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]
EOF
        print_success "Dockerfile created"
    fi
    
    if [ ! -f "$DOCKERIGNORE" ]; then
        print_info "Creating .dockerignore..."
        cat > "$DOCKERIGNORE" << EOF
node_modules
npm-debug.log
.git
.gitignore
README.md
.env
.DS_Store
.vscode
.idea
build
dist
coverage
EOF
        print_success ".dockerignore created"
    fi
    
    print_info "Docker setup complete"
    echo ""
}

################################################################################
# Verification and Summary
################################################################################

verify_setup() {
    print_header "Verifying Setup"
    
    # Check node_modules
    if [ -d "$PROJECT_ROOT/node_modules" ]; then
        print_success "node_modules directory found"
    else
        print_error "node_modules directory not found"
        return 1
    fi
    
    # Check if npm commands work
    if npm list &>/dev/null; then
        print_success "npm dependencies verified"
    else
        print_error "npm dependency verification failed"
        return 1
    fi
    
    print_success "Setup verification complete"
    echo ""
}

print_summary() {
    print_header "Setup Summary"
    
    echo "Environment: $ENVIRONMENT"
    echo "Project Root: $PROJECT_ROOT"
    echo ""
    
    echo "Next Steps:"
    echo "1. Update .env file with your configuration"
    echo "2. Start development server: npm start"
    echo "3. Run tests: npm test"
    echo "4. Build for production: npm run build"
    echo ""
    
    if [ "$ENVIRONMENT" = "production" ]; then
        echo "Production Build:"
        echo "- Build artifact location: $PROJECT_ROOT/build"
        echo "- Deploy the 'build' folder to your hosting service"
        echo ""
    fi
    
    if [ "$SETUP_DOCKER" = true ] && [ -f "$PROJECT_ROOT/Dockerfile" ]; then
        echo "Docker Commands:"
        echo "- Build image: docker build -t deltastars-frontend ."
        echo "- Run container: docker run -p 3000:3000 deltastars-frontend"
        echo ""
    fi
    
    print_success "Setup completed successfully!"
}

################################################################################
# Parse Arguments
################################################################################

parse_arguments() {
    while [[ $# -gt 0 ]]; do
        case $1 in
            --dev)
                ENVIRONMENT="development"
                shift
                ;;
            --prod)
                ENVIRONMENT="production"
                shift
                ;;
            --docker)
                SETUP_DOCKER=true
                shift
                ;;
            --verbose)
                VERBOSE=true
                shift
                ;;
            --help)
                show_help
                exit 0
                ;;
            *)
                print_error "Unknown option: $1"
                show_help
                exit 1
                ;;
        esac
    done
}

################################################################################
# Main Execution
################################################################################

main() {
    clear
    
    print_header "Deltastars Frontend Setup"
    echo ""
    
    # Parse command-line arguments
    parse_arguments "$@"
    
    # Run setup steps
    run_system_checks
    setup_env_file
    install_dependencies
    setup_git_hooks
    setup_docker
    build_project
    verify_setup
    print_summary
}

# Execute main function
main "$@"
