terraform {
  backend "gcs" {
    bucket = "grab-an-rose-terraform-state"
    prefix = "terraform/state"
  }
}
