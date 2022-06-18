module "github" {
  # https://github.com/imomaliev/terraform-registry/tree/main/modules/github
  source = "git@github.com:imomaliev/terraform-registry.git//modules/github"

  token       = var.github_token
  is_template = true
  # Vue TS TailwindCSS
  project_name        = "vue-ts-tailwind"
  project_description = "Vite + Vue + TypeScript + TailwindCSS template"
  project_url         = "https://imomaliev.github.io/vue-ts-tailwind/"
  topics = [
    "typescript",
    "vue",
    "eslint",
    "prettier",
    "jest",
    "vite",
    "pre-commit",
    "tailwindcss"
  ]
  template = {
    owner      = "imomaliev"
    repository = "vue-ts"
  }

}
