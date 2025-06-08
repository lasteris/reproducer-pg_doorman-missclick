#!/bin/bash

JAVA="$JAVA_HOME/bin/java"

$JAVA -XX:+HeapDumpOnOutOfMemoryError -XX:+ExitOnOutOfMemoryError -Xmx256M -XX:MetaspaceSize=128M -jar pg_doorman-missclick-1.0.0-SNAPSHOT-runner.jar