package jp.co.internous.ecsite.model.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import jp.co.internous.ecsite.model.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	   //countを取得するSQL文
		@Query(value="select count(user_name) from user where user_name = :userName",nativeQuery=true)
		int findCountByUserName(@Param("userName")String userName);
	List<User> findByUserNameAndPassword(String userName, String password);

}

