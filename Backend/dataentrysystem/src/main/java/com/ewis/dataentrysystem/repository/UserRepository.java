package com.ewis.dataentrysystem.repository;

import com.ewis.dataentrysystem.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
