package com.aot.exception;

public class DuplicateAccountException extends RuntimeException {

  public DuplicateAccountException(String message) {
    super(message);
  }
}
